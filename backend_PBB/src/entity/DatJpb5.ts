import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { DatOpBangunan } from "./DatOpBangunan";

@Index("dat_jpb5_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBng", "noUrut"], { unique: true })
@Entity("dat_jpb5", { schema: "public" })
export class DatJpb5 {
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

  @Column("character", { name: "kls_jpb5", length: 1 })
  klsJpb5!: string;

  @Column("bigint", { name: "luas_kmr_jpb5_dgn_ac_sent", nullable: true })
  luasKmrJpb5DgnAcSent!: string | null;

  @Column("bigint", { name: "luas_rng_lain_jpb5_dgn_ac_sent", nullable: true })
  luasRngLainJpb5DgnAcSent!: string | null;

  @OneToOne(() => DatOpBangunan, (datOpBangunan) => datOpBangunan.datJpb5)
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
