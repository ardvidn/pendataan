import { Column, Entity, Index, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { DatOpBangunan } from "./DatOpBangunan";
import { DayaDukung } from "./DayaDukung";

@Index("dat_jpb8_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBng", "noUrut"], { unique: true })
@Entity("dat_jpb8", { schema: "public" })
export class DatJpb8 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "kd_blok", length: 3 })
  kdBlok!: string;

  @Column("character", { primary: true, name: "no_urut", length: 4 })
  noUrut!: string;

  @Column("character", { primary: true, name: "kd_jns_op", length: 1 })
  kdJnsOp!: string;

  @Column("smallint", { primary: true, name: "no_bng" })
  noBng!: number;

  @Column("smallint", { name: "ting_kolom_jpb8" })
  tingKolomJpb8!: number;

  @Column("smallint", { name: "lbr_bent_jpb8" })
  lbrBentJpb8!: number;

  @Column("smallint", { name: "luas_mezzanine_jpb8", nullable: true })
  luasMezzanineJpb8!: number | null;

  @Column("smallint", { name: "keliling_dinding_jpb8", nullable: true })
  kelilingDindingJpb8!: number | null;

  @Column("integer", { name: "daya_dukung_lantai_jpb8" })
  dayaDukungLantaiJpb8!: number;

  @OneToOne(() => DatOpBangunan, (datOpBangunan) => datOpBangunan.datJpb8)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
    { name: "kd_kecamatan", referencedColumnName: "kdKecamatan" },
    { name: "kd_kelurahan", referencedColumnName: "kdKelurahan" },
    { name: "kd_blok", referencedColumnName: "kdBlok" },
    { name: "no_urut", referencedColumnName: "noUrut" },
    { name: "kd_jns_op", referencedColumnName: "kdJnsOp" },
    { name: "no_bng", referencedColumnName: "noBng" },
  ])
  datOpBangunan!: DatOpBangunan;

  @ManyToOne(() => DayaDukung, (dayaDukung) => dayaDukung.datJpbs2)
  @JoinColumn([{ name: "type_konstruksi", referencedColumnName: "typeKonstruksi" }])
  typeKonstruksi!: DayaDukung;
}
