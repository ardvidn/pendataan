import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Fasilitas } from "./Fasilitas";
import { DatOpBangunan } from "./DatOpBangunan";

@Index("dat_fasilitas_bangunan_pkey", ["kdBlok", "kdDati2", "kdFasilitas", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBng", "noUrut"], { unique: true })
@Entity("dat_fasilitas_bangunan", { schema: "public" })
export class DatFasilitasBangunan {
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

  @Column("character", { primary: true, name: "kd_fasilitas", length: 2 })
  kdFasilitas!: string;

  @Column("bigint", { name: "jml_satuan" })
  jmlSatuan!: string;

  @ManyToOne(() => Fasilitas, (fasilitas) => fasilitas.datFasilitasBangunans)
  @JoinColumn([{ name: "kd_fasilitas", referencedColumnName: "kdFasilitas" }])
  kdFasilitas2!: Fasilitas;

  @ManyToOne(() => DatOpBangunan, (datOpBangunan) => datOpBangunan.datFasilitasBangunans)
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
}
