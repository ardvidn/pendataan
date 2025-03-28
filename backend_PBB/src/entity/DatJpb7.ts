import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { DatOpBangunan } from "./DatOpBangunan";

@Index("dat_jpb7_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBng", "noUrut"], { unique: true })
@Entity("dat_jpb7", { schema: "public" })
export class DatJpb7 {
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

  @Column("character", { name: "jns_jpb7", length: 1 })
  jnsJpb7!: string;

  @Column("character", { name: "bintang_jpb7", length: 1 })
  bintangJpb7!: string;

  @Column("smallint", { name: "jml_kmr_jpb7" })
  jmlKmrJpb7!: number;

  @Column("bigint", { name: "luas_kmr_jpb7_dgn_ac_sent", nullable: true })
  luasKmrJpb7DgnAcSent!: string | null;

  @Column("bigint", { name: "luas_kmr_lain_jpb7_dgn_ac_sent", nullable: true })
  luasKmrLainJpb7DgnAcSent!: string | null;

  @OneToOne(() => DatOpBangunan, (datOpBangunan) => datOpBangunan.datJpb7)
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
