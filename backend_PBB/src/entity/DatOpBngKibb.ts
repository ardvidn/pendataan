import { Column, Entity, Index } from "typeorm";

@Index("bng_sin_kibt_fk2", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBng", "noUrut"], {})
@Index("dat_op_bng_kibb_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdKibb", "kdPbi", "kdPebin", "kdPpbi", "kdPropinsi", "kdUpb", "noBng", "noUrut"], { unique: true })
@Index("bng_sin_kibt_fk", ["kdKibb", "kdPbi", "kdPebin", "kdPpbi", "kdUpb"], {})
@Entity("dat_op_bng_kibb", { schema: "public" })
export class DatOpBngKibb {
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

  @Column("character", { primary: true, name: "kd_pebin", length: 2 })
  kdPebin!: string;

  @Column("character", { primary: true, name: "kd_pbi", length: 2 })
  kdPbi!: string;

  @Column("character", { primary: true, name: "kd_ppbi", length: 2 })
  kdPpbi!: string;

  @Column("character", { primary: true, name: "kd_upb", length: 6 })
  kdUpb!: string;

  @Column("character", { primary: true, name: "kd_kibb", length: 3 })
  kdKibb!: string;
}
