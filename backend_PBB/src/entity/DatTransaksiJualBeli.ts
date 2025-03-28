import { Column, Entity, Index } from "typeorm";

@Index("dat_transaksi_jual_beli_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "tglTransaksi"], { unique: true })
@Index("d12_1_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "tglTransaksi"], { unique: true })
@Entity("dat_transaksi_jual_beli", { schema: "public" })
export class DatTransaksiJualBeli {
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

  @Column("timestamp without time zone", {
    primary: true,
    name: "tgl_transaksi",
  })
  tglTransaksi!: Date;

  @Column("character", { name: "sumber_informasi", length: 1 })
  sumberInformasi!: string;

  @Column("bigint", { name: "luas_bumi_transaksi", nullable: true })
  luasBumiTransaksi!: string | null;

  @Column("bigint", { name: "luas_bng_transaksi", nullable: true })
  luasBngTransaksi!: string | null;

  @Column("character", { name: "kd_znt_transaksi", length: 2 })
  kdZntTransaksi!: string;

  @Column("bigint", { name: "harga_bng_transaksi", nullable: true })
  hargaBngTransaksi!: string | null;

  @Column("bigint", { name: "harga_bumi_transaksi", nullable: true })
  hargaBumiTransaksi!: string | null;

  @Column("bigint", { name: "harga_total_transaksi" })
  hargaTotalTransaksi!: string;

  @Column("timestamp without time zone", {
    name: "tgl_rekam_transaksi",
    default: () => "statement_timestamp()",
  })
  tglRekamTransaksi!: Date;

  @Column("character", { name: "nip_perekam", length: 18 })
  nipPerekam!: string;
}
